import React, { Fragment, useReducer, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getToday } from "../../utils/date";
import Button from "../general/Button/Button";
import styles from "./PresentDay.module.css";
import { useEffect } from "react";
import Modal from "../general/Modal/Modal";
import { Dialog, Transition } from "@headlessui/react";

export const PresentDay = (props) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const showModal = useSelector((state: any) => state.presentDay.toggle.showModal);
  console.log("PresentDay props", props, store);

  useEffect(() => {
    console.log("PresentDay useEffect", showModal);
  }, [showModal]);

  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
    dispatch({ type: "presentDay/showModal", payload: { showModal: false } });
  }

  function openModal() {
    setIsOpen(true);
    dispatch({ type: "presentDay/showModal", payload: { showModal: true } });
  }

  return (
    <div className={styles.presentDay}>
      {/* <Button
        className={`${styles.animatedBtn}`}
        style={{
          transform: showModal ? "scale(5)" : undefined,
          opacity: showModal ? 0 : undefined,
          pointerEvents: showModal ? "none" : undefined,
        }}
        onClick={(e) => {
          // dispatch({
          //   type: 'presentDay/generate', payload: {
          //     title: getToday(),
          //     description: 'Win win is good',
          //     date: getToday()
          //   }
          // })
          
        }}
      >
        {getToday()}
      </Button> */}
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="flex justify-center items-center flex-col rounded-md bg-emerald-600 bg-opacity-50 px-4 py-2 text-lg font-bold text-white hover:bg-opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          新建今日事项
        <span className="font-light text-sm">{getToday()}</span>
        </button>
      </div>
      {showModal && (
        <>
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                        Payment successful
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Your payment has been successfully submitted. We’ve sent you an email with all of the details
                          of your order.
                        </p>
                      </div>

                      <div className="mt-4">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Got it, thanks!
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
          {/* <div className={styles.modal}>
            <Modal>
              <div className={styles.modalTitle}></div>
              <div className={styles.modalContent}>
                <div className={styles.modalContentTitle}>标题</div>
                <input className={styles.modalContentInput} />
                <div className={styles.modalContentTitle}>描述</div>
                <textarea className={styles.modalContentInput} />
                <div className={styles.modalContentTitle}>日期</div>
                <input className={styles.modalContentInput} />
              </div>
              <div className={styles.modalFooter}>
                <Button
                  className={styles.modalFooterBtn}
                  onClick={(e) => {
                    dispatch({ type: "presentDay/showModal", payload: { showModal: false } });
                  }}
                >
                  取消
                </Button>
                <Button
                  className={styles.modalFooterBtn}
                  onClick={(e) => {
                    dispatch({ type: "presentDay/showModal", payload: { showModal: false } });
                  }}
                >
                  确定
                </Button>
              </div>
            </Modal>
          </div> */}
        </>
      )}
    </div>
  );
};

export default PresentDay;
