import React from "react";
import Navbar from "../Navbar/Navbar";
import ServiceUser from "../../Services/API";
import "./style.css";

export default class Repositorios extends React.Component {
  state = {
    mensagemErro: "Nenhum usuário para ser exibido.",
    nomeUsuario: this.props.history.location.pathname.split("/")[2],
    userRepos: []
  };

  getRepositoryList = async (username) => {
    this.setState(await ServiceUser.getUserRepos(username));
  };

  renderRepositoryList() {
    if (this.state.userRepos) {
      if (this.state.userRepos.length === 0) {
        this.getRepositoryList(this.state.nomeUsuario);
      }

      let listaRepos = [];

      for (let repo of this.state.userRepos) {
        listaRepos.push(
          <div class="card mb-3">
            <div className="card-header">{repo.full_name}</div>
            <div class="card-body">
              {repo.description || "Repositório sem descrição."}
            </div>
          </div>
        );
      }

      return listaRepos;
    } else {
      return (
        <div className="alert alert-light" role="alert">
          {this.state.mensagemErro}
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Navbar location={this.props.history.location} />

        <div className="container mt-3">{this.renderRepositoryList()}</div>
      </div>
    );
  }
}
