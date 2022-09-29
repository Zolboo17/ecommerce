import React from "react";

function Subscribe() {
  return (
    <section class="h-fit ">
      <script src="https://cdn.tailwindcss.com"></script>
      <h1 class="flex px-8 py-10 gap-1 text-5xl text-slate-500 font-bold  w-screen justify-center">
        Subscribe
      </h1>
      <p class="flex px-8 gap-1 text-5xl text-slate-500 bg-grey  w-screen justify-center">
        fdjakfjafksdjfasjfsjfksakfl;asjfksdf kdlsajfksdlfjsdklfj;ljks
      </p>

      <div class=" object-none object-center px-72 pt-10">
        <form>
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div class="relative">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
             
            </div>
            <input
              type="search"
              id="default-search"
              class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:text-black dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your email address"
              required
            />
            <button
              type="submit"
              class="text-white absolute right-0 bottom-0 w-56 bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-5 dark:bg-black dark:hover:bg-black"
            >
              SUBMIT
            </button>
            
          </div>
       
        </form>
        
      </div>
      <p class="flex px-8 gap-1 text-5xl text-slate-500 bg-grey  w-screen justify-center pb-10">
        fdjakfjafksdjfasjfsjfksakfl;asjfksdf kdlsajfksdlfjsdklfj;ljks
      </p>
    </section>
  );
}

export default Subscribe;
