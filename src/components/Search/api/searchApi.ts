import * as request from '~/api/axiosClient';

export const search = async (keyword: string) => {
    try {
        const res = await request.get('/tim-kiem.json', {
            params: {
                keyword,
            },
        });
        console.log(res);
        return res.pageProps.data;
    } catch (error) {
        console.log(error);
    }
};
