import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

import "./Memotest.css";

import bellota from "../../assets/memotest/bellota.png";
import billy from "../../assets/memotest/billy.png";
import bloo from "../../assets/memotest/bloo.png";
import bombon from "../../assets/memotest/bombon.png";
import burbuja from "../../assets/memotest/burbuja.png";
import coraje from "../../assets/memotest/coraje.png";
import dexter from "../../assets/memotest/dexter.png";
import ed_edd_eddy from "../../assets/memotest/ed_edd_eddy.png";
import jerry from "../../assets/memotest/jerry.png";
import johnny_bravo from "../../assets/memotest/johnny_bravo.png";
import numero_1 from "../../assets/memotest/numero_1.png";
import samurai_jack from "../../assets/memotest/samurai_jack.png";
import scooby_doo from "../../assets/memotest/scooby_doo.png";
import tom from "../../assets/memotest/tom.png";

const IMAGES = [
  bellota,
  billy,
  bloo,
  bombon,
  burbuja,
  coraje,
  dexter,
  ed_edd_eddy,
  jerry,
  johnny_bravo,
  numero_1,
  samurai_jack,
  scooby_doo,
  tom,
]
  .flatMap((image) => [`a|${image}`, `b|${image}`])
  .sort(() => Math.random() - 0.5);

export default function Memotest() {
  const [guessed, setGuessed] = useState([]);
  const [selected, setSelected] = useState([]);
  const [hasWon, setHasWon] = useState(false);

  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].split("|")[1] === selected[1].split("|")[1]) {
        setGuessed((guessed) => guessed.concat(selected));
      }

      setTimeout(() => {
        setSelected([]);
      }, 500);
    }
  }, [selected]);

  useEffect(() => {
    guessed.length === IMAGES.length && setHasWon(true);
  }, [guessed]);

  return (
    
    <Grid
      className="mainContainer"
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        xs: {
          justifyContent: "start",
          alignItems: "start"
        }
      }}
    >
      <Grid item className="itemsContainer">
        <Grid padding="32px">
          <h1>MEMOTEST - Cartoon Network</h1>
          <p>Encuentra dos cartas iguales y completa todas para ganar</p>
        </Grid>

        <Grid
          padding="32px"
          sx={{
            xs: {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }
          }}
        >
          <ul className="items" style={{display: 'flex', flexWrap: 'wrap'}} >
            {IMAGES.map((image) => {
              const [, url] = image.split("|");

              return (
                <li
                  onClick={() =>
                    selected.length < 2 &&
                    setSelected((selected) => selected.concat(image))
                  }
                  key={image}
                  style={{
                    padding: 10,
                    border: "2px solid #f4f4f4",
                    borderRadius: 10,
                    cursor: "pointer",
                    width: '100px',
                  }}
                >
                  
                    {/* <img alt="icon" src={url} /> */}
                    {selected.includes(image) || guessed.includes(image) ? (
                      <img alt="icon" src={url} />
                    ) : (
                      <img
                        alt="icon"
                        src="src/assets/search.png"
                        style={{ color: "#fff" }}
                      />
                    )}
                </li>
              );
            })}
          </ul>

          {hasWon && (
            <div className="modal">
              <dialog className="modal-content" open>
                <h2 style={{marginBottom: '24px'}}>Felicidades, ganaste!</h2>
                <button style={{padding: '16px', width: '80%'}} onClick={() => location.reload()}>
                  Volver a jugar
                </button>
              </dialog>
            </div>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
