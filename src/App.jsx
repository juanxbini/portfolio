import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const repositories = [
  {
    name: "Proyecto 1",
    description: "Descripción del proyecto 1.",
    url: "https://github.com/usuario/proyecto1",
  },
  {
    name: "Proyecto 2",
    description: "Descripción del proyecto 2.",
    url: "https://github.com/usuario/proyecto2",
  },
  // Agrega más repositorios aquí
];

export default function GitHubPage() {
  return (
    <div className="container text-center mt-5 bg-dark text-light py-5">
      <div className="d-flex flex-column align-items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Foto de perfil"
          className="rounded-circle border border-info shadow-lg mb-3"
          width="150"
        />
        <h1 className="fw-bold text-info">Tu Nombre</h1>
        <p className="text-light w-75">
          Aquí va tu biografía, una breve descripción sobre ti y lo que haces.
        </p>
      </div>

      <div className="row mt-4">
        {repositories.map((repo, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card shadow-lg bg-secondary text-light border-info">
              <div className="card-body">
                <h5 className="card-title text-info">{repo.name}</h5>
                <p className="card-text text-light">{repo.description}</p>
                <a
                  href={repo.url}
                  className="btn btn-outline-info"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver en GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
