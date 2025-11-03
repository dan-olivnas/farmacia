import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { ClipLoader } from "react-spinners";
import { atualizar, buscar, cadastrar } from "../../../services/Service";

function FormCategorias() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      alert("Erro ao buscar a categoria!");
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/categorias");
  }

  async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (id !== undefined) {
        await atualizar(`/categorias`, categoria, setCategoria);
        alert("A categoria foi atualizada com sucesso!");
      } else {
        await cadastrar(`/categorias`, categoria, setCategoria);
        alert("A categoria foi cadastrada com sucesso!");
      }
    } catch (error: any) {
      alert("Erro ao salvar a categoria!");
    } finally {
      setIsLoading(false);
      retornar();
    }
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? "Cadastrar categoria" : "Atualizar categoria"}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">

          <label htmlFor="nome">Nome da categoria</label>
          <input
            type="text"
            placeholder="Digite aqui o nome da categoria"
            name="nome"
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.nome || ""}
            onChange={atualizarEstado}
          />

          <label htmlFor="descricao">Descrição da categoria</label>
          <input
            type="text"
            placeholder="Descreva aqui sua categoria"
            name="descricao"
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.descricao || ""}
            onChange={atualizarEstado}
          />

        </div>


        <button
          className="rounded text-slate-100 bg-indigo-400 
                    hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
          type="submit"
        >
          {isLoading ? (
            <ClipLoader color="#ffffff" size={24} />
          ) : (
            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormCategorias;
