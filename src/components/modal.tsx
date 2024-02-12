import React, { type FC } from 'react'

interface Props {
  message: string
  closeModal: React.MouseEventHandler
}

export const Modal: FC<Props> = ({ message, closeModal }) => {
  return (
    <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-50 flex justify-center items-center w-full md:inset-0 h-screen bg-[rgba(0,0,0,50%)]">
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white shadow ">
          <button onClick={closeModal} type="button" className="absolute top-3 end-2.5 text-secondary bg-transparent hover:bg-accentPrimary hover:text-primary text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="popup-modal">
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-4 md:p-5 text-center">
            <svg className="mx-auto mb-4 text-green-600 w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <h3 className="mb-5 text-lg font-normal text-secondary">{message}</h3>
            <button onClick={closeModal} type="button" className="text-white bg-accentPrimary focus:outline-none font-medium text-sm inline-flex items-center px-8 py-3 text-center me-2">
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
