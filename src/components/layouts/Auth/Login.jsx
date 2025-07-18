import { useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import { openLoginModel } from "../../../redux/slices/uiSlice";
import { openRegisterModel } from "../../../redux/slices/uiSlice";

export default function Login() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.ui.isLoginModelOpen);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(isLogin);
  }, [isLogin]);
  return (
    <div>
      {/* <button
        onClick={() => setOpen(true)}
        className="rounded-md bg-gray-950/5 px-2.5 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-950/10"
      >
        Open dialog
      </button> */}
      <Dialog
        open={open}
        onClose={() => dispatch(openLoginModel())}
        className="relative z-10"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center  text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-[350px] data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="">
                <div className="">
                  <div className=" ">
                    <form className="bg-white text-gray-500   md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
                      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                        Login Now
                      </h2>
                      <input
                        id="email"
                        className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
                        type="email"
                        placeholder="Enter your email"
                        required
                      />
                      <input
                        id="password"
                        className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
                        type="password"
                        placeholder="Enter your password"
                        required
                      />
                      <div className="text-right py-4">
                        <a className="text-blue-600 underline" href="#">
                          Forgot Password
                        </a>
                      </div>
                      <button
                        type="submit"
                        className="w-full mb-3 bg-indigo-500 hover:bg-indigo-600/90 active:scale-95 transition py-2.5 rounded-full text-white"
                      >
                        Log in
                      </button>
                      <p className="text-center mt-4">
                        Don’t have an account?{" "}
                        <button
                          onClick={() => {
                            dispatch(openLoginModel());
                            dispatch(openRegisterModel());
                          }}
                          className="text-blue-500 underline cursor-pointer"
                        >
                          Signup Now
                        </button>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
              {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  Deactivate
                </button>
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div> */}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
