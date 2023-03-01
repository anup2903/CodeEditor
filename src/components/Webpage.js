import React ,{useEffect} from 'react'

const Webpage = () => {
    function Run(){
      const html = document.querySelector(".Web #HTML").value;
      const css =
        "<style>" + document.querySelector(".Web #CSS").value + "</style>";
      const js = document.querySelector(".Web #JS").value;
      const output = document.querySelector(".Web #Output");

      output.contentWindow.document.body.innerHTML = html + css;
      output.contentWindow.eval(js);
    }
  return (
    <div className="Web">
      <div className="buttons">
        <div className="b1 but">
            <button className='but1'>HTML</button>
        </div>
        <div className="b2 but">
            <button className='but1'>CSS</button>
        </div>
        <div className="b3 but">
            <button className='but1'>JS</button>
        </div>
        <div className="b4 but">
            <button className='but1'>Result</button>
        </div>
      </div>
      <div className="editors">
        <div className="codehtml">
          <span className="httag">HTML</span>
          <textarea id="HTML" onKeyUp={Run}></textarea>
        </div>
        <div className="codecss">
          <span className="csstag">CSS</span>
          <textarea id="CSS" rows="4" cols="50" onKeyUp={Run}></textarea>
        </div>
        <div className="codejs">
          <span className="jstag">JS</span>
          <textarea id="JS" onKeyUp={Run}></textarea>
        </div>
      </div>
      <iframe id="Output"></iframe>
    </div>
  );
}

export default Webpage