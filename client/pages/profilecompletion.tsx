import { motion } from "framer-motion";
import ProtectedLayout from "../components/Layouts/ProtectedLayout";

export default function Profilecompletion() {
  return (
    <ProtectedLayout>
      <div className="flex flex-col items-center w-full h-full gap-4 lg:justify-start">
        <motion.div
          className="m-2 lg:m-4 w-[90%] md:w-[80%] flex flex-col items-center justify-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          <h1 className="mb-4 text-xl font-semibold md:text-2xl lg:text-3xl lg:mb-8">
            Complete your profile
          </h1>
          <form className="flex flex-col gap-2 md:gap-4 lg:grid lg:grid-cols-2 lg:w-[40%]">
            <label className="flex flex-col font-semibold">
              Age
              <input
                type="number"
                className="bg-transparent border-[1px] p-1 font-normal lg:p-2 outline-none appearance-none"
              />
            </label>
            <label className="flex flex-col font-semibold">
              Sexe
              <select className="bg-transparent border-[1px] p-1 font-normal lg:p-2 outline-none appearance-none">
                <option defaultValue={""} hidden></option>
                <option value="Male" className="bg-soft-pink">
                  Male
                </option>
                <option value="Female" className="bg-soft-pink">
                  Female
                </option>
                <option value="Other" className="bg-soft-pink">
                  Other
                </option>
              </select>
            </label>
            <label className="flex flex-col font-semibold">
              Oriantation
              <select className="bg-transparent border-[1px] p-1 font-normal lg:p-2 outline-none appearance-none">
                <option defaultValue={""} hidden></option>
                <option value="Straight" className="bg-soft-pink">
                  Straight
                </option>
                <option value="Bisexual" className="bg-soft-pink">
                  Bisexual
                </option>
                <option value="Lesbian" className="bg-soft-pink">
                  Lesbian
                </option>
                <option value="Homosexual" className="bg-soft-pink">
                  Homosexual
                </option>
              </select>
            </label>
            <label className="flex flex-col font-semibold">
              Interested in
              <select className="bg-transparent border-[1px] p-1 font-normal lg:p-2 outline-none appearance-none">
                <option defaultValue={""} hidden></option>
                <option value="Boys" className="bg-soft-pink">
                  Boys
                </option>
                <option value="Girls" className="bg-soft-pink">
                  Girls
                </option>
                <option value="Both" className="bg-soft-pink">
                  Both
                </option>
              </select>
            </label>
            <label className="flex flex-col col-span-2 font-semibold">
              Bio
              <textarea className="bg-transparent border-[1px] p-1 font-normal lg:p-2 outline-none appearance-none"></textarea>
            </label>
            <motion.button
              type="submit"
              className="p-1 mt-2 border-2 shadow-xs lg:p-2 hover:shadow-sm hover:shadow-white shadow-white/50 lg:col-span-2"
              whileTap={{
                scale: 1,
              }}
              whileHover={{ scale: 1.1 }}
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>
    </ProtectedLayout>
  );
}
