import { useEffect, useState } from 'react';
import { data as dummyData } from './dummyData.json';
const sortedData = dummyData.sort((a, b) => (a.name > b.name ? 1 : -1));

type Variables = { offset: number; limit: number; name: string };
type Return = { results: typeof sortedData; metadata: { aggregate: { count: number } } };

const filterData = ({ limit, offset, name: search }: Variables) => {
    const searchLower = search.toLowerCase();
    const allResults = sortedData.filter(({ name }) =>
        name.toLowerCase()[search.length > 3 ? 'includes' : 'startsWith'](searchLower)
    );
    const paginatedResults = allResults.slice(0, limit + offset);
    return {
        results: paginatedResults,
        metadata: { aggregate: { count: allResults.length } },
    };
};

export const useGetCustomerFilters = ({ limit, name, offset }: Variables) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<Return>();
    const [variables, setVariables] = useState<Variables>({ limit, offset, name });

    useEffect(() => {
        setData(undefined);
        setVariables((v) => ({ ...v, name }));
    }, [name]);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setData(filterData(variables));
        }, 700);
    }, [variables]);

    const fetchMore = (newVariables: { variables: Variables }) => {
        setVariables({ ...variables, ...newVariables.variables });
    };

    return { data, loading, fetchMore };
};
