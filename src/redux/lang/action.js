export const LANG_EN = 'LANG_EN';
export const LANG_ID = 'LANG_ID';

//action creator
export const langEN = () => ({
    type: LANG_EN,
    payload: 'EN'
});
export const langID = () => ({
    type: LANG_ID,
    payload: 'ID'
});