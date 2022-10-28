import { motion } from "framer-motion";
import React, { MouseEventHandler, useState } from "react";
import { BtnProps } from "../types/types";
import { interests } from "../components/utils/interests";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setInterests, unsetInterests } from "../redux/UserInterests";

const InterestBtn = ({ title }: { title: string }) => {
  const [disabled, setDisabled] = useState(false);
  const state = useSelector((data: RootState) => data.interests);
  const dispatch = useDispatch();
  const addItem: MouseEventHandler = (e) => {
    if (state.length < 5) {
      const target = e.target as HTMLElement;
      dispatch(setInterests(target.innerText.slice(1)));
      setDisabled(true);
    }
  };
  const removeItem: MouseEventHandler = (e) => {
    const target = e.target as HTMLElement;
    dispatch(unsetInterests(target.innerText.slice(1)));
    setDisabled(false);
  };
  return (
    <motion.li
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`p-2 lg:p-2 border-[1px] rounded-full cursor-pointer shadow-sm shadow-white/50
                           outline-none ${
                             disabled ? "bg-pinky-dark-gray" : ""
                           }`}
      value={title}
      onClick={disabled ? removeItem : addItem}
    >
      {title}
    </motion.li>
  );
};
export default InterestBtn;
