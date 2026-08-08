import { useState } from "react";
import { motion } from "framer-motion";

import Card from "./Shared/Card";
import Avatar from "./Avatar";
import Display from "./Display";
import Keypad from "./Keypad";
import PasskeyModal from "./PasskeyModal";

import { useBirthday } from "../../Components/context/BirthdayContext";
import PageTransition from "./Shared/PageTransition";

const PASSWORD = "2006";

const Passkey = () => {
  const { setScreen } = useBirthday();

  const [code, setCode] = useState("");

  const [open, setOpen] = useState(false);

  const [shake, setShake] = useState(false);

  const addNumber = (num) => {
    if (code.length >= 4) return;

    const newCode = code + num;

    setCode(newCode);

    if (newCode.length === 4) {
      if (newCode === PASSWORD) {
        setTimeout(() => {
          setScreen("intro");
        }, 700);
      } else {
        setShake(true);

        setTimeout(() => {
          setShake(false);

          setCode("");
        }, 600);
      }
    }
  };

  const removeNumber = () => {
    setCode(code.slice(0, -1));
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex justify-center items-center">
        <motion.div animate={shake ? { x: [0, -10, 10, -10, 10, 0] } : {}}>
          <Card>
            <Avatar openModal={() => setOpen(true)} />

            <h1 className="text-center text-5xl mt-6 font-serif">LOCKED</h1>

            <p className="text-center text-gray-400 mt-3">
              Hint - Click on picture to know passkey!
            </p>

            <Display value={code} />

            <Keypad addNumber={addNumber} removeNumber={removeNumber} />
          </Card>
        </motion.div>

        {open && <PasskeyModal close={() => setOpen(false)} />}
      </div>
    </PageTransition>
  );
};

export default Passkey;
