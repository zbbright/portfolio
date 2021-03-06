import React from 'react';

function Resume(props){
    return (
        <div className="container-sm mx-auto my-3 rounded bg-white">
            <h6 className="text-danger">**Content may not display correctly on small devices**</h6>
            <p>View on Google Docs <a href="https://docs.google.com/document/d/1_dYtBHfcFPEggzEstGfqmKrBDL1cPMb1hUVs6ZLtYiA/edit?usp=sharing">here.</a></p>
            <iframe title="resume" src="https://docs.google.com/document/d/e/2PACX-1vQVfhmKGYWCDDNMxP10fCP3PgOpbjx1M4XfTs18-XL-07dNT67SXCGbiIY_gNeIqA29ZaruAiHJVej7/pub" width="100%" height="600px"/>
        </div>
    )
}

export default Resume;