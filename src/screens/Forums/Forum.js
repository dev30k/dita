import React from 'react';
import {AiOutlineLike} from 'react-icons/ai';

function Forum(props) {
    return (
        <section className="py-10 2xl:py-12 bg-blueGray-100 rounded-t-10xl overflow-hidden">
            <div className="container px-4 mx-auto">
                <span className="text-xs text-gray-300 uppercase tracking-wide">What people are asking</span>
                <h1 className="mt-8 mb-12 md:mb-12 text-2xl md:text-10xl xl:text-11xl font-heading font-medium leading-tight">Recent Forums Posts</h1>

                <a className="inline-block mb-4 text-1xl font-heading font-medium underline hover:text-darkBlueGray-700"
                   href="#">1,218 unanswered forum posts</a>
                <div className="mb-4 mt-2 shadow-lg rounded-t-8xl rounded-b-5xl overflow-hidden">
                    <div className="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-white bg-opacity-40 ">
                        <div className="flex flex-wrap ">
                            <img className="mr-6" src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=8" className="h-8 px-2 rounded-full"alt="" />
                                <h4 className="w-full md:w-auto text-xl font-heading font-medium">Faustina H. Fawn</h4>
                                <div className="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div>
                               <div className="inline-flex justify-end">

                                       <button className='bg-gray-300 text-gray-400 font-bold py-2 mx-3 px-6 rounded-md'>
                                           Answer
                                       </button>
                                       <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded-l" >
                                           <AiOutlineLike />
                                       </button>

                                </div>
                        </div>
                    </div>
                    <div className="px-4 overflow-hidden md:px-16 pt-8 pb-12 bg-white">
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-2/3 mb-6 md:mb-0">
                                <p className="mb-8 max-w-2xl text-md font-semibold text-darkBlueGray-400 leading-loose">I haretra neque non mi
                                    aliquam, finibus hart bibendum molestie. Vestibulum suscipit sagittis dignissim
                                    mauris.</p>
                                <div className="-mb-2">
                                    <div className="inline-flex w-full md:w-auto md:mr-2 mb-0.5">
                                        <div
                                            className="flex items-center h-12 pl-2 pr-6 bg-gray-200 border-2 border-gray-50 rounded-full">
                                            <div
                                                className="flex mr-2 w-8 h-6 items-center justify-center bg-white rounded-full text-green-500">
                                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                                                        fill="gray"></path>
                                                </svg>
                                            </div>
                                            <span
                                                className="text-white-500 font-heading font-sm">Dkt John Nguu</span>
                                        </div>
                                    </div>
                                    <div className="inline-flex w-full md:w-auto md:mr-2 mb-0.5">
                                        <div
                                            className="flex items-center h-12 pl-2 pr-6 bg-gray-200 border-2 border-gray-50 rounded-full">
                                            <div
                                                className="flex mr-2 w-8 h-6 items-center justify-center bg-white rounded-full text-green-500">
                                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                                                        fill="gray"></path>
                                                </svg>
                                            </div>
                                            <span
                                                className="text-white-500 font-heading font-sm">EEE 221</span>
                                        </div>
                                    </div>
                                    <div className="inline-flex w-full md:w-auto md:mr-2 mb-0.5">
                                        <div
                                            className="flex items-center h-12 pl-2 pr-6 bg-gray-200 border-2 border-gray-50 rounded-full">
                                            <div
                                                className="flex mr-2 w-8 h-6 items-center justify-center bg-white rounded-full text-green-500">
                                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                                                        fill="gray"></path>
                                                </svg>
                                            </div>
                                            <span
                                                className="text-white-500 font-heading font-sm">Newtons Law of Motion</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 text-right">
                                <p className="mb-8 text-sm text-gray-300">Added 2 months ago</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mb-4 mt-2 shadow-lg rounded-t-8xl rounded-b-5xl overflow-hidden">
                    <div className="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-white bg-opacity-40 ">
                        <div className="flex flex-wrap ">
                            <img className="mr-6" src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=8" className="h-8 px-2 rounded-full"alt="" />
                            <h4 className="w-full md:w-auto text-xl font-heading font-medium">Faustina H. Fawn</h4>
                            <div className="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div>
                            <div className="inline-flex justify-end">

                                <button className='bg-gray-300 text-gray-400 font-bold py-2 mx-3 px-6 rounded-md'>
                                    Answer
                                </button>
                                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded-l" >
                                    <AiOutlineLike />
                                </button>

                            </div>
                        </div>
                    </div>
                    <div className="px-4 overflow-hidden md:px-16 pt-8 pb-12 bg-white">
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-2/3 mb-6 md:mb-0">
                                <p className="mb-8 max-w-2xl text-md font-semibold text-darkBlueGray-400 leading-loose">I haretra neque non mi
                                    aliquam, finibus hart bibendum molestie. Vestibulum suscipit sagittis dignissim
                                    mauris.</p>
                                <div className="-mb-2">
                                    <div className="inline-flex w-full md:w-auto md:mr-2 mb-0.5">
                                        <div
                                            className="flex items-center h-12 pl-2 pr-6 bg-gray-200 border-2 border-gray-50 rounded-full">
                                            <div
                                                className="flex mr-2 w-8 h-6 items-center justify-center bg-white rounded-full text-green-500">
                                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                                                        fill="gray"></path>
                                                </svg>
                                            </div>
                                            <span
                                                className="text-white-500 font-heading font-sm">Dkt John Nguu</span>
                                        </div>
                                    </div>
                                    <div className="inline-flex w-full md:w-auto md:mr-2 mb-0.5">
                                        <div
                                            className="flex items-center h-12 pl-2 pr-6 bg-gray-200 border-2 border-gray-50 rounded-full">
                                            <div
                                                className="flex mr-2 w-8 h-6 items-center justify-center bg-white rounded-full text-green-500">
                                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                                                        fill="gray"></path>
                                                </svg>
                                            </div>
                                            <span
                                                className="text-white-500 font-heading font-sm">EEE 221</span>
                                        </div>
                                    </div>
                                    <div className="inline-flex w-full md:w-auto md:mr-2 mb-0.5">
                                        <div
                                            className="flex items-center h-12 pl-2 pr-6 bg-gray-200 border-2 border-gray-50 rounded-full">
                                            <div
                                                className="flex mr-2 w-8 h-6 items-center justify-center bg-white rounded-full text-green-500">
                                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                                                        fill="gray"></path>
                                                </svg>
                                            </div>
                                            <span
                                                className="text-white-500 font-heading font-sm">Newtons Law of Motion</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 text-right">
                                <p className="mb-8 text-sm text-gray-300">Added 2 months ago</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-4 mt-2 shadow-lg rounded-t-8xl rounded-b-5xl overflow-hidden">
                    <div className="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-white bg-opacity-40 ">
                        <div className="flex flex-wrap ">
                            <img className="mr-6" src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=8" className="h-8 px-2 rounded-full"alt="" />
                            <h4 className="w-full md:w-auto text-xl font-heading font-medium">Faustina H. Fawn</h4>
                            <div className="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div>
                            <div className="inline-flex justify-end">

                                <button className='bg-gray-300 text-gray-400 font-bold py-2 mx-3 px-6 rounded-md'>
                                    Answer
                                </button>
                                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded-l" >
                                    <AiOutlineLike />
                                </button>

                            </div>
                        </div>
                    </div>
                    <div className="px-4 overflow-hidden md:px-16 pt-8 pb-12 bg-white">
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-2/3 mb-6 md:mb-0">
                                <p className="mb-8 max-w-2xl text-md font-semibold text-darkBlueGray-400 leading-loose">I haretra neque non mi
                                    aliquam, finibus hart bibendum molestie. Vestibulum suscipit sagittis dignissim
                                    mauris.</p>
                                <div className="-mb-2">
                                    <div className="inline-flex w-full md:w-auto md:mr-2 mb-0.5">
                                        <div
                                            className="flex items-center h-12 pl-2 pr-6 bg-gray-200 border-2 border-gray-50 rounded-full">
                                            <div
                                                className="flex mr-2 w-8 h-6 items-center justify-center bg-white rounded-full text-green-500">
                                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                                                        fill="gray"></path>
                                                </svg>
                                            </div>
                                            <span
                                                className="text-white-500 font-heading font-sm">Dkt John Nguu</span>
                                        </div>
                                    </div>
                                    <div className="inline-flex w-full md:w-auto md:mr-2 mb-0.5">
                                        <div
                                            className="flex items-center h-12 pl-2 pr-6 bg-gray-200 border-2 border-gray-50 rounded-full">
                                            <div
                                                className="flex mr-2 w-8 h-6 items-center justify-center bg-white rounded-full text-green-500">
                                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                                                        fill="gray"></path>
                                                </svg>
                                            </div>
                                            <span
                                                className="text-white-500 font-heading font-sm">EEE 221</span>
                                        </div>
                                    </div>
                                    <div className="inline-flex w-full md:w-auto md:mr-2 mb-0.5">
                                        <div
                                            className="flex items-center h-12 pl-2 pr-6 bg-gray-200 border-2 border-gray-50 rounded-full">
                                            <div
                                                className="flex mr-2 w-8 h-6 items-center justify-center bg-white rounded-full text-green-500">
                                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                                                        fill="gray"></path>
                                                </svg>
                                            </div>
                                            <span
                                                className="text-white-500 font-heading font-sm">Newtons Law of Motion</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 text-right">
                                <p className="mb-8 text-sm text-gray-300">Added 2 months ago</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-4 mt-2 shadow-lg rounded-t-8xl rounded-b-5xl overflow-hidden">
                    <div className="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-white bg-opacity-40 ">
                        <div className="flex flex-wrap ">
                            <img className="mr-6" src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=8" className="h-8 px-2 rounded-full"alt="" />
                            <h4 className="w-full md:w-auto text-xl font-heading font-medium">Faustina H. Fawn</h4>
                            <div className="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div>
                            <div className="inline-flex justify-end">

                                <button className='bg-gray-300 text-gray-400 font-bold py-2 mx-3 px-6 rounded-md'>
                                    Answer
                                </button>
                                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded-l" >
                                    <AiOutlineLike />
                                </button>

                            </div>
                        </div>
                    </div>
                    <div className="px-4 overflow-hidden md:px-16 pt-8 pb-12 bg-white">
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-2/3 mb-6 md:mb-0">
                                <p className="mb-8 max-w-2xl text-md font-semibold text-darkBlueGray-400 leading-loose">I haretra neque non mi
                                    aliquam, finibus hart bibendum molestie. Vestibulum suscipit sagittis dignissim
                                    mauris.</p>
                                <div className="-mb-2">
                                    <div className="inline-flex w-full md:w-auto md:mr-2 mb-0.5">
                                        <div
                                            className="flex items-center h-12 pl-2 pr-6 bg-gray-200 border-2 border-gray-50 rounded-full">
                                            <div
                                                className="flex mr-2 w-8 h-6 items-center justify-center bg-white rounded-full text-green-500">
                                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                                                        fill="gray"></path>
                                                </svg>
                                            </div>
                                            <span
                                                className="text-white-500 font-heading font-sm">Dkt John Nguu</span>
                                        </div>
                                    </div>
                                    <div className="inline-flex w-full md:w-auto md:mr-2 mb-0.5">
                                        <div
                                            className="flex items-center h-12 pl-2 pr-6 bg-gray-200 border-2 border-gray-50 rounded-full">
                                            <div
                                                className="flex mr-2 w-8 h-6 items-center justify-center bg-white rounded-full text-green-500">
                                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                                                        fill="gray"></path>
                                                </svg>
                                            </div>
                                            <span
                                                className="text-white-500 font-heading font-sm">EEE 221</span>
                                        </div>
                                    </div>
                                    <div className="inline-flex w-full md:w-auto md:mr-2 mb-0.5">
                                        <div
                                            className="flex items-center h-12 pl-2 pr-6 bg-gray-200 border-2 border-gray-50 rounded-full">
                                            <div
                                                className="flex mr-2 w-8 h-6 items-center justify-center bg-white rounded-full text-green-500">
                                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                                                        fill="gray"></path>
                                                </svg>
                                            </div>
                                            <span
                                                className="text-white-500 font-heading font-sm">Newtons Law of Motion</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 text-right">
                                <p className="mb-8 text-sm text-gray-300">Added 2 months ago</p>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="text-center">
                    <button className="rounded-md border-2 py-2 px-4 bg-blue-500 text-center text-white">
                        See All
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Forum;