const base_url = 'https://api.unsplash.com/'
const access_key='?client_id=0dUNHiJXUSWQ6QLp0Rf2uqdrCmn86GqvoG805WAq1pI';

const photos_get='photos/'

export const photosGet = () => `${base_url}${photos_get}${access_key}`;