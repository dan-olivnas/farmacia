import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import CardCategoria from "../cardcategoria/CardCategoria";

function ListaCategorias() {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setCategoria] = useState<Categoria[]>([]);

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  async function buscarCategorias() {
    try {
      setIsLoading(true);
      await buscar("/categorias", setCategoria);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
    console.error(error) 
      
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      {isLoading && <SyncLoader color="#312e81" size={32} />}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          {!isLoading && categorias.length === 0 && (
            <span className="text-3xl text-center my-8">
              Nenhuma categoria foi encontrada!
            </span>
          )}
          <div
            className="grid grid-cols-1 md:grid-cols-2 
                        lg:grid-cols-3 gap-8"
          >
            {categorias.map((categoria) => (
              <CardCategoria key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategorias;