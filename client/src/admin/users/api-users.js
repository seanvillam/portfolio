const API = "http://localhost:5000/api/users";

export const list = async () => {
    const response = await fetch(API);
    return await response.json();
};

export const read = async (id) => {
    const response = await fetch(`${API}/${id}`);
    return await response.json();
};

export const create = async (user) => {
    const response = await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });

    return await response.json();
};

export const update = async (id, user) => {
    const response = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });

    return await response.json();
};

export const remove = async (id) => {
    const response = await fetch(`${API}/${id}`, {
        method: "DELETE",
    });

    return await response.json();
};