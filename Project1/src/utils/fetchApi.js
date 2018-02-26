const config = {
    mode: 'cors'
};

export function get(url){
    return fetch(url, config).then(resp => {
        const result = resp.json();

        return result;
    });
}

/* args must be a json arg */
export function post(url, args){
    const postConfig = {
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(args),
        contentType: "application/json"
    };

    return fetch(url, postConfig).then(resp => {
        return resp.json();
    });
}
