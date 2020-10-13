import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Line, Bar } from 'react-chartjs-2';

// import Chart from 'chart.js'


// import d from 





function Api() {
    const [Country, setCountry] = useState()
    const [Date, setDate] = useState()
    const [Confirmed, setConfirmed] = useState()
    const [Deaths, setDeaths] = useState()
    const [Recovered, setRecovered] = useState()
    const [Active, setActive] = useState()
    const [NewDeath, setNewdeath] = useState()
    const [NewRecovered, setNewrecovered] = useState()
    const [NewConfirmed, setNewconfirmed] = useState()
    const [button, setButton] = useState('myanmar')
    const [scountry, setsCountry] = useState('myanmar')


    const [death7, setdeath7] = useState([])
    const [death6, setdeath6] = useState([])
    const [death5, setdeath5] = useState([])
    const [death4, setdeath4] = useState([])
    const [death3, setdeath3] = useState([])
    const [death2, setdeath2] = useState([])


    const [confirmed7, setconfirmed7] = useState([])
    const [confirmed6, setconfirmed6] = useState([])
    const [confirmed5, setconfirmed5] = useState([])
    const [confirmed4, setconfirmed4] = useState([])
    const [confirmed3, setconfirmed3] = useState([])
    const [confirmed2, setconfirmed2] = useState([])


    const [recovered7, setrecovered7] = useState([])
    const [recovered6, setrecovered6] = useState([])
    const [recovered5, setrecovered5] = useState([])
    const [recovered4, setrecovered4] = useState([])
    const [recovered3, setrecovered3] = useState([])
    const [recovered2, setrecovered2] = useState([])



    useEffect(() => {
        Axios.get(`https://api.covid19api.com/dayone/country/${button}`)
            .then(res => {

                setCountry(res.data[res.data.length - 1].Country)
                setDate(res.data[res.data.length - 1].Date.substring(0, 10))

                setDeaths(res.data[res.data.length - 1].Deaths)
                setActive(res.data[res.data.length - 1].Active)
                setConfirmed(res.data[res.data.length - 1].Confirmed)
                setRecovered(res.data[res.data.length - 1].Recovered)
                // daily record
                setNewdeath(res.data[res.data.length - 1].Deaths - res.data[res.data.length - 2].Deaths)
                setNewrecovered(res.data[res.data.length - 1].Recovered - res.data[res.data.length - 2].Recovered)
                setNewdeath(res.data[res.data.length - 1].Deaths - res.data[res.data.length - 2].Deaths)
                setNewconfirmed(res.data[res.data.length - 1].Confirmed - res.data[res.data.length - 2].Confirmed)




                setdeath7(res.data[res.data.length - 7].Deaths - res.data[res.data.length - 8].Deaths)
                setdeath6(res.data[res.data.length - 6].Deaths - res.data[res.data.length - 7].Deaths)
                setdeath5(res.data[res.data.length - 5].Deaths - res.data[res.data.length - 6].Deaths)
                setdeath4(res.data[res.data.length - 4].Deaths - res.data[res.data.length - 5].Deaths)
                setdeath3(res.data[res.data.length - 3].Deaths - res.data[res.data.length - 4].Deaths)
                setdeath2(res.data[res.data.length - 2].Deaths - res.data[res.data.length - 3].Deaths)


                setconfirmed7(res.data[res.data.length - 7].Confirmed - res.data[res.data.length - 8].Confirmed)
                setconfirmed6(res.data[res.data.length - 6].Confirmed - res.data[res.data.length - 7].Confirmed)
                setconfirmed5(res.data[res.data.length - 5].Confirmed - res.data[res.data.length - 6].Confirmed)
                setconfirmed4(res.data[res.data.length - 4].Confirmed - res.data[res.data.length - 5].Confirmed)
                setconfirmed3(res.data[res.data.length - 3].Confirmed - res.data[res.data.length - 4].Confirmed)
                setconfirmed2(res.data[res.data.length - 2].Confirmed - res.data[res.data.length - 3].Confirmed)


                setrecovered7(res.data[res.data.length - 7].Recovered - res.data[res.data.length - 8].Recovered)
                setrecovered6(res.data[res.data.length - 6].Recovered - res.data[res.data.length - 7].Recovered)
                setrecovered5(res.data[res.data.length - 5].Recovered - res.data[res.data.length - 6].Recovered)
                setrecovered4(res.data[res.data.length - 4].Recovered - res.data[res.data.length - 5].Recovered)
                setrecovered3(res.data[res.data.length - 3].Recovered - res.data[res.data.length - 4].Recovered)
                setrecovered2(res.data[res.data.length - 2].Recovered - res.data[res.data.length - 3].Recovered)


            })
            .catch(e => {

                alert("invalid country")
            })

    },
        [button])



    const Ddata = {
        labels: ['D-7', 'D-6', 'D-5', 'D-3', 'D-2', 'D-1', 'Now'],
        datasets: [{
            label: ' Deaths ',
            data: [
                death7,
                death6,
                death5,
                death4,
                death3,
                death2,
                NewDeath
            ],
            backgroundColor: [
                'rgba(255,0,21,0.7)',
                // pattern.draw('circle', '#36a2eb'),
            ]
        }],


    }


    const Cdata = {
        labels: ['D-7', 'D-6', 'D-5', 'D-3', 'D-2', 'D-1', 'Now'],
        datasets: [{
            label: ' Positive ',
            data: [
                confirmed7,
                confirmed6,
                confirmed5,
                confirmed4,
                confirmed3,
                confirmed2,
                NewConfirmed
            ],
            backgroundColor: [
                'rgba(223,123,212,0.8)',
                'rgba(223,213,12,0.8)',
                'rgba(2,123,212,0.8)',
                'rgba(23,23,122,0.8)',
                'rgba(93,23,132,0.8)',
                'rgba(200,231,142,0.8)',
                'rgba(214,41,12,0.8)',
                // pattern.draw('circle', '#36a2eb'),
            ]
        }],


    }

    const Rdata = {
        labels: ['D-7', 'D-6', 'D-5', 'D-3', 'D-2', 'D-1', 'Now'],
        datasets: [{
            label: ' Recovered ',
            data: [
                recovered7,
                recovered6,
                recovered5,
                recovered4,
                recovered3,
                recovered2,
                NewRecovered
            ],
            backgroundColor: [
                'rgba(150,255,31,1)',
                // pattern.draw('circle', '#36a2eb'),
            ]
        }],


    }

    const send = () => {
        let aa = document.getElementById('search');
        let bb = document.getElementById('input');
        aa.style.width = "200px"
        bb.style.display = "flex";
        setButton(scountry)
    }

    return (
        <div>
          
            <div id="bander">
                <div id="nav" className="container py-md-4">
                    <h2>Covid-19</h2>
                    <div id="search">
                        <input type="text" value={scountry} id="input" onChange={(e) => setsCountry(e.target.value)} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="country" />
                        <div id="circle" onClick={send} >
                            <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTczLjQ1ODMzLDIxLjVjLTI4LjYzMjE0LDAgLTUxLjk1ODMzLDIzLjMyNjIxIC01MS45NTgzMyw1MS45NTgzM2MwLDI4LjYzMjEyIDIzLjMyNjE5LDUxLjk1ODMzIDUxLjk1ODMzLDUxLjk1ODMzYzEyLjM4NTI5LDAgMjMuNzcwNzksLTQuMzc1MDkgMzIuNzExOTEsLTExLjY0NTgzbDM1LjE1NDQ2LDM1LjE1NDQ2YzEuMzQ4MTUsMS40MDQxMiAzLjM1MDA1LDEuOTY5NzEgNS4yMzM2NCwxLjQ3ODY2YzEuODgzNTksLTAuNDkxMDUgMy4zNTQ1NiwtMS45NjIwMiAzLjg0NTYxLC0zLjg0NTYxYzAuNDkxMDUsLTEuODgzNTkgLTAuMDc0NTUsLTMuODg1NDkgLTEuNDc4NjYsLTUuMjMzNjRsLTM1LjE1NDQ2LC0zNS4xNTQ0NmM3LjI3MDc0LC04Ljk0MTEyIDExLjY0NTgzLC0yMC4zMjY2MyAxMS42NDU4MywtMzIuNzExOTFjMCwtMjguNjMyMTIgLTIzLjMyNjE5LC01MS45NTgzMyAtNTEuOTU4MzMsLTUxLjk1ODMzek03My40NTgzMywzMi4yNWMyMi44MjI0MiwwIDQxLjIwODMzLDE4LjM4NTkzIDQxLjIwODMzLDQxLjIwODMzYzAsMTEuMTE3NjkgLTQuMzg1MjksMjEuMTYyMTUgLTExLjQ5ODg2LDI4LjU2MTY5Yy0wLjQzODQ5LDAuMzIyMjkgLTAuODI1NSwwLjcwOTMgLTEuMTQ3NzksMS4xNDc3OWMtNy4zOTk1Myw3LjExMzU3IC0xNy40NDM5OSwxMS40OTg4NiAtMjguNTYxNjksMTEuNDk4ODZjLTIyLjgyMjQyLDAgLTQxLjIwODMzLC0xOC4zODU5MyAtNDEuMjA4MzMsLTQxLjIwODMzYzAsLTIyLjgyMjQgMTguMzg1OTEsLTQxLjIwODMzIDQxLjIwODMzLC00MS4yMDgzM3oiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==" />
                        </div>
                    </div>

                </div>
                <div id="bar" className="container my-5">
                    <div id="country" >
                        <p>{Country}</p>
                    </div>
                    <div id="date">
                        <p>{Date}</p>
                    </div>
                </div>
                <div id="stats" className="container">
                    <div className="row container" id="sss">
                        <div id="nconfirmed" className="col-3">
                                <h2 className="my-4">NEW CONFIRM</h2>
                                <p>{NewConfirmed}</p>
                        </div>
                        <div id="nrecovered" className="col-3">
                        <h2 className="my-4"> NEW RECOVER</h2>
                                <p>{NewRecovered}</p>
                        </div>
                        <div id="ndeaths" className="col-3">
                        <h2 className="my-4">NEW DEATHS</h2>
                                <p>{NewDeath}</p>
                        </div>
                    </div>
                </div>

                <div className="my-5 pb-5">
                    <div  id="total" className="container" >
                    <div id="tconfirmed" className="col-4 py-3 ">
                        <h3>{Confirmed}</h3>
                        <p>TOTAL CONFIRM</p>
                    </div>
                    <div id="trecovered" className="col-4 py-3 ">
                        <h3>{Recovered}</h3>
                        <p>TOTAL RECOVER</p>
                    </div>
                    <div id="tdeaths" className="col-4 py-3 ">
                        <h3>{Deaths}</h3>
                        <p>TOTAL DEATHS</p>
                    </div>
                    </div>
                </div>

            </div>

        <div id="charts" >
            <h2 >COVID-19 STATS CHARTS</h2>
            <div id="cconfirmed" className="container">
                <p>Last 7 Days Positive Chart</p>
                <div className="col-lg-6 my-5" id="bar">
                <Bar data={Cdata} 
                            options={{
                                responsive: true,
                                legend: {
                                    display: false,

                                }
                            }}
                        />
                </div>
            </div>
            <div id="cconfirmed" className="container">
                <p>Last 7 Days Recovered Chart</p>
                <div className="col-lg-6 my-5" id="bar">
                <Line data={Rdata}
                            options={{
                                responsive: true,
                                legend: {
                                    display: false
                                },
                                fill: false


                            }
                            }
                        />
                </div>
            </div>
            <div id="cconfirmed" className="container">
                <p>Last 7 Days Deaths Chart</p>
                <div className="col-lg-6 my-5" id="bar">
                <Line data={Ddata}
                            options={{
                                responsive: true,
                                legend: {
                                    display: false
                                },
                            }
                            }
                        />
                </div>
            </div>

            
        </div> 




            {/* {Date}
            <div className="container">
                <div className="row ">
                    <div className="   col-lg-6  my-5" >
                        <p>Last 7 Days Deaths Chart</p>
                        <Line data={Ddata}
                            options={{
                                responsive: true,
                                legend: {
                                    display: false
                                },
                            }
                            }
                        />
                    </div>



                    <div className=" col-lg-6 my-5" >
                        <p></p>
                        <Bar data={Cdata}
                            options={{
                                responsive: true,
                                legend: {
                                    display: false,

                                }
                            }}
                        />
                    </div>

                    <div className="   col-lg-6  my-5" >
                        <p>Last 7 Days Recovered Chart</p>
                        <Line data={Rdata}
                            options={{
                                responsive: true,
                                legend: {
                                    display: false
                                },
                                fill: false


                            }
                            }
                        />
                    </div>
                </div>
            </div>





            <p>{Country}</p>
            <p>Total Death {Deaths}</p>

            <p>Active {Active}</p>
            <p>Total Confirmed {Confirmed}</p>
            <p>Total Recovered {Recovered}</p>

            <hr />
            <p>New Death {NewDeath}</p>
            <p>New Recovered {NewRecovered}</p>
            <p>New Confirmed {NewConfirmed}</p>

 */}






        </div>

    )

}




export default Api
{/* <button >send</button> */ }
{/* <input  placeholder="search country" /> */ }