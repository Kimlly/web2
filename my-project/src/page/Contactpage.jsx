import React, { useState } from 'react';
import LandingLayout from '../layout/LandingLayout';
import { db,auth } from '../authentication/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { UserAuth } from '../context/AuthContext';

function Contactpage() {
  const {user}=UserAuth();
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Add a new document to the "requests" collection
      const newRequest = await addDoc(collection(db, 'requests'), {
        user,
        description,
      });

      console.log('Document written with ID: ', newRequest.id);

      // Clear the form after submission
      setDescription('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <LandingLayout>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
          </p>
          <form onSubmit={handleSubmit} className="space-y-8">
            
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Tell us briefly about yourself
              </label>
              <textarea
                id="message"
                rows="6"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </LandingLayout>
  );
}

export default Contactpage;
