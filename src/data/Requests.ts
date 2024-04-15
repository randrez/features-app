const request = {
    fetchFilterFeatures: (page: number, perPage: number, magTypes: string[]) => {
        const magTypesQueryParam = magTypes.length > 0 ? `&mag_types=${magTypes.join(',')}` : '';
        return `features?page=${page}&per_page=${perPage}${magTypesQueryParam}`;
    },
    fetchFeatureComments: (featureId: number) => {
        return `features/${featureId}/comment`;
    }
};

export default request;