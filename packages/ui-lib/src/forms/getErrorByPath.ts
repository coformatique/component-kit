import { FieldErrors } from 'react-hook-form';
export const getErrorByPath = (errorsObject: FieldErrors<any>, path: string) => {
    const paths = path.split('.').flatMap((p) => {
        if (p.includes('[') && p.endsWith(']')) {
            const [s1, _s2] = p.split('[');
            const s2 = _s2.slice(0, _s2.length - 1);
            return [s1, s2];
        }
        return p;
    });
    let error;
    for (let p of paths) {
        error = (error ?? errorsObject)[p];
    }
    return error;
};
