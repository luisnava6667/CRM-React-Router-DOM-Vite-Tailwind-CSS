import { useLoaderData } from "react-router-dom";
import Cliente from "../components/Cliente";
import { obtenerClientes } from "../data/clientes";
export function loader() {
  const cliente = obtenerClientes();
  return cliente;
}
const Index = () => {
  const clientes = useLoaderData();
  //errors Boundaries

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus Clientes</p>
      {clientes.length ? (
        <table className="w-full shadow bg-white table-auto mt-5">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Cliente</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <Cliente key={cliente.id} cliente={cliente} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10">No hay clientes</p>
      )}
    </>
  );
};

export default Index;
