
// Check is mobile
const checkMobile = (): boolean =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent || navigator.vendor
    );

export { checkMobile };
export default { checkMobile };