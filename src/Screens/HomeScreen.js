import React from 'react';
import './HomeScreen.css';
import Nav from '../Nav.js';
import Banner from '../Banner.js';
import requests from '../Requests';
import Row from '../Row'


function HomeScreen() {
  return (
    <div className="homeScreen">
        <Nav/>
        
        <Banner/>

        <Row
          title='NETFLIX ORIGINALS'
          fetchUrl = {requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
        <Row title='Animated Movies' fetchUrl={requests.fetchAnimatedMovies} />
        <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
        <Row title='Animated TV Shows' fetchUrl={requests.fetchAnimatedTv} />
        <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
        <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
        <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
        <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default HomeScreen