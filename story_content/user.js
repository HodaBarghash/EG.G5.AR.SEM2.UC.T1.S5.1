function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5W33AWFedws":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwloIj_1hlEBZf4vRhaseZGG1uCx6cx3ZVNJUXi-HZSDJ-hhVknfwmhxKh89N9ezPU2uw/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

