import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import CardColumns from 'react-bootstrap/CardColumns';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import NumberFormat from 'react-number-format';
import ReactTooltip from 'react-tooltip';
import { css } from "@emotion/core";
import PacmanLoader from "react-spinners/PacmanLoader";
import Toggle from 'react-toggle';
import "react-toggle/style.css";


function Home() {

  const [latest, setLatest] = useState([]);
  const [countries, setCountries] = useState([]);
  const [searchCountries, setsearchCountries] = useState("");
  const [loading, setLoading] = useState(true);
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    axios 
    .all([
      axios.get('https://disease.sh/v3/covid-19/all'),
      axios.get('https://disease.sh/v3/covid-19/countries')
      
      /** The original API used */
      //axios.get('https://corona.lmao.ninja/v2/all'),
      //axios.get('https://corona.lmao.ninja/v2/countries')
    ])
    .then(responseArr => {
      setLatest(responseArr[0].data);
      setCountries(responseArr[1].data);
      setLoading(false);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  const date = new Date(parseInt(latest.updated));
  const lastUpdated = date.toDateString();

  const filterCountry = countries.filter(item => {
    return searchCountries !== "" ? item.country.includes(searchCountries) : item;
  })

  const mapCountry = filterCountry.map((data, i) => {
    return(
      <Card key={i} bg={darkTheme ? "dark" : "light"}
      text={darkTheme ? "light" : "dark"} 
      style={{margin: "8px"}}>
        <Card.Header>{data.country}</Card.Header>
        <Card.Img variant="top" src={data.countryInfo.flag} alt={data.country} />
        <Card.Body>
          <Card.Text> Coronavirus Cases &nbsp;
          <NumberFormat 
            value={data.cases}
            displayType={"text"}
            thousandSeparator={true}
          />
          </Card.Text>
          <Card.Text> Deceased &nbsp;
            <NumberFormat 
              value={data.deaths}
              displayType={"text"}
              thousandSeparator={true}
            />
          </Card.Text>
          <Card.Text> Recovered &nbsp;
            <NumberFormat 
              value={data.recovered}
              displayType={"text"}
              thousandSeparator={true}
            />
          </Card.Text>
          <Card.Text> Active &nbsp;
            <NumberFormat 
              value={data.active}
              displayType={"text"}
              thousandSeparator={true}
            />
          </Card.Text>
          <Card.Text> Today's Cases &nbsp;
            <NumberFormat 
              value={data.todayCases}
              displayType={"text"}
              thousandSeparator={true}
            />
          </Card.Text>
          <Card.Text> Today's Deaths &nbsp;
            <NumberFormat 
              value={data.todayDeaths}
              displayType={"text"}
              thousandSeparator={true}
            />
          </Card.Text>
          <Card.Text> Critical &nbsp;
            <NumberFormat 
              value={data.todayDeaths}
              displayType={"text"}
              thousandSeparator={true}
            />
          </Card.Text>
        </Card.Body>
      </Card>
    );
  })


  const override = css`
    display: block;
    margin: 0 auto;
  `;

  const handleDarkLayoutChange = () => {
    setDarkTheme(!darkTheme)
  }

  return (
    <div className="App" style={{backgroundColor: darkTheme ? "midnightblue" : "floralwhite", 
    color: darkTheme ? "white" : "black"}}>
      <div>
        <PacmanLoader
          css={override}
          size={30}
          margin={2}
          color={"#8989ba"}
          loading={loading}
        />
      </div><br/>
      <h2 
        data-tip="Last modified date: 27/04/2020 - v2.0"
        style={{ textAlign: "center"}}
      >
        Mollusk | Covid-19 Live Stats Tracker
      </h2>
      <ReactTooltip effect="solid" />
      <br/>
      <div style={{textAlign: "center", justifyContent: "center"}}>
        <Toggle
          defaultChecked={false}
          icons={{
            checked: "🌜",
            unchecked: "🌞",
          }}
          onChange={handleDarkLayoutChange} 
        />
      </div>
      <CardDeck style={{padding: "15px"}}>
        <Card bg="primary" text="white">
          <Card.Body>
            <Card.Title>Coronavirus Cases</Card.Title>
            <NumberFormat
              value={latest.cases}
              displayType={"text"}
              thousandSeparator={true}
              style={{fontSize: "30px"}}
            />
          </Card.Body>
          <Card.Footer>
            <small>{lastUpdated}</small>
          </Card.Footer>
        </Card>
        <Card bg="danger" text="white">
          <Card.Body>
            <Card.Title>Deceased</Card.Title>
            <NumberFormat 
              value={latest.deaths}
              displayType={"text"}
              thousandSeparator={true}
              style={{fontSize: "30px"}}
            />
          </Card.Body>
          <Card.Footer>
            <small>{lastUpdated}</small>
          </Card.Footer>
        </Card>
        <Card bg="success" text="white">
          <Card.Body>
            <Card.Title>Recovered</Card.Title>
            <NumberFormat 
              value={latest.recovered}
              displayType={"text"}
              thousandSeparator={true}
              style={{fontSize: "30px"}}
            />
          </Card.Body>
          <Card.Footer>
            <small>{lastUpdated}</small>
          </Card.Footer>
        </Card>
      </CardDeck>

      {/** End of  First Card Deck */}
      <hr/>

      <CardDeck style={{padding: "15px"}}>
        <Card bg="info" text="white">
          <Card.Body>
            <Card.Title>Active Cases</Card.Title>
            <NumberFormat 
              value={latest.active}
              displayType={"text"}
              thousandSeparator={true}
              style={{fontSize: "30px"}}
            />
          </Card.Body>
          <Card.Footer>
            <small>{lastUpdated}</small>
          </Card.Footer>
        </Card>
        <Card bg="secondary" text="white">
          <Card.Body>
            <Card.Title>Today's Cases</Card.Title>
            <NumberFormat 
              value={latest.todayCases}
              displayType={"text"}
              thousandSeparator={true}
              style={{fontSize: "30px"}}
            />
          </Card.Body>
          <Card.Footer>
            <small>{lastUpdated}</small>
          </Card.Footer>
        </Card>
        <Card bg="warning" text="white">
          <Card.Body>
            <Card.Title>Critical</Card.Title>
            <NumberFormat 
              value={latest.critical}
              displayType={"text"}
              thousandSeparator={true}
              style={{fontSize: "30px"}}
            />
          </Card.Body>
          <Card.Footer>
            <small>{lastUpdated}</small>
          </Card.Footer>
        </Card>
      </CardDeck>

      <hr/>
      {/** Search Countries */}
      <Form style={{paddingLeft: "20px", paddingRight: "20px"}}>
        <Form.Group controlId="formCountrySearch">
          <Form.Control type="text" placeholder="Search by Country"
          onChange={e => setsearchCountries(e.target.value)} />
        </Form.Group>
      </Form>

      <hr/>
      {/** Countries */}
      <CardColumns style={{paddingLeft: "15px", paddingRight: "20px"}}>
        {mapCountry}
      </CardColumns>
      
    </div>
  );
}

export default Home;
