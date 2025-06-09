import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

export const FetchApp = () => {
    const url = "https://jsonplaceholder.typicode.com/users";

    const { data, isLoading, error, fetchData } = useFetch();

    useEffect(() => {
        fetchData(url, "GET");
    }, [url]);

    return (
        <>
            <h2>Lista de usuarios</h2>
            {isLoading ? (
                <h4>Loading...</h4>
            ) : error ? (
                <h4>Error al cargar la data</h4>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((i) => {
                            return (
                                <tr key={i.id}>
                                    <th scope="row">{i.id}</th>
                                    <td>{i.name}</td>
                                    <td>{i.email}</td>
                                    <td>{i.website}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}
        </>
    );
};
