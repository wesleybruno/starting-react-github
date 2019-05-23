import React, {Component} from 'react'
import {getRepos} from '../../services/repos'
import RepoList from './RepoList'

class RepoContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            repos: [],
            username: ''
        }
        this.changeInput = this.changeInput.bind(this)
        this.submitForm = this.submitForm.bind(this)
        
    }

    //
    componentDidMount(){
        getRepos(this.state.username).then(res => this.setState({repos: res.data})).catch(error => {

        });
    }
    //
    changeInput(ev){
        this.setState({username: ev.target.value})
        console.log(ev.target.value);
    }

    submitForm(ev){
        ev.preventDefault();
        getRepos(this.state.username).then(res => this.setState({repos: res.data}))
    }
    //
    render(){
        return (
            <div>
                <h1>Repository Founds</h1>
                <form action='#' onSubmit={this.submitForm}>
                    <label>Repositorio a ser buscado!</label>
                    <input type="text" placeholder='Informe o repositório!' onChange={this.changeInput}/>
                </form>
                <RepoList repos={this.state.repos}></RepoList>
            </div>
        )
    }
}

export default RepoContainer