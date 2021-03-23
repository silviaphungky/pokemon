import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import PokemonDetailPage from './pages/pokemon-detail-page'
import PokemonListPage from './pages/pokemon-list-page'
import MyPokemonListPage from './pages/my-pokemon-list-page'
import NotFoundPage from 'pages/not-found-page'
import { NetworkProvider } from 'context/network-provider'

function App() {

  const client = new ApolloClient({
    uri: 'https://graphql-pokeapi.vercel.app/api/graphql'
  })

  return (
    <div 
      className="App"
      title='App'
    >
      <ApolloProvider client={ client }>
        <NetworkProvider>
          <Router>
            <Switch>
              <Route 
                exact
                path='/'
                component={ PokemonListPage }
              />
              <Route 
                exact
                path='/pokemon/:pokemonName'
                component={ PokemonDetailPage }
              />
              <Route 
                exact
                path='/pokedex'
                component={ MyPokemonListPage }
              />
              <Route 
                exact
                path='*'
                component={ NotFoundPage }
              />
            </Switch>
          </Router>
        </NetworkProvider>
      </ApolloProvider>
    </div>
  )
}

export default App
