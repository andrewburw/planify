import { useEffect } from "react";
import useFetch from './../../hooks/useFetch';
/* *************************************************************
|
|
|                     Month calendar file
|
|       *  Dash board file.
|
|      My page: https://andrewburw.github.io/personalpage/
|
|
| **************************************************************/

const DashBoard = () => {
  const { response, runFetch, error } = useFetch();
  useEffect(() => {


    runFetch('/api/userinfo', 'get');

  }, [])
  const showAvatar = (data) => {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#4AA7FD";

    data.forEach((item) => {
      if (item.run) {
        ctx.fillRect(item.a, item.b, item.c, item.d);
        ctx.fillRect(280 - (item.a), item.b, 20, 20);
      }

    })

  }
  response !== 'null' ? showAvatar(JSON.parse(response.data.avatar)) : '';



  return (
    <div>
      <h1>DashBOard</h1>
      <canvas id="canvas" ></canvas>
    </div>
  );
}

export default DashBoard;