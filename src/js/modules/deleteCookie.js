export function deleteCookie(name) {
    setCookie(name, '', {
        'max-age': -99999999
    });
}