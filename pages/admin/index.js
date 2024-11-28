import { useState } from 'react';

export default function Admin() {
    const [activeTab, setActiveTab] = useState('movies');

    return (
        <div style={{ height: '90vh' }}>
            <div className="d-flex justify-content-between p-5">
                <div>

                </div>
                <div className="">
                    <button className="btn btn-outline-warning btn-lg mx-2 px-4">Create</button>
                </div>
            </div>
            <div className="px-5 ">
                <div className='pb-4 d-flex justify-content-between'>
                    <div className="d-flex gap-3">
                        <button
                            className={`btn ${activeTab === 'movies' ? 'border-warning' : ''} transparent-btn`}
                            onClick={() => setActiveTab('movies')}
                        >
                            Movies
                        </button>
                        <button
                            className={`btn ${activeTab === 'shows' ? 'border-warning' : ''} transparent-btn`}
                            onClick={() => setActiveTab('shows')}
                        >
                            TV Shows
                        </button>
                    </div>
                    <div>
                    <input
                        placeholder="search"
                        className="px-3 py-2 rounded-pill"
                        style={{ backgroundColor: '#282c30' }}
                    />
                    </div>
                </div>


                {/* Conditionally render content based on activeTab */}
                {activeTab === 'movies' && (
                    <table className="table table-striped table-dark rounded-3">
                        <thead>
                            <tr>
                                <th scope="col" className="px-4 py-3">Poster</th>
                                <th scope="col" className="px-4 py-3">Title</th>
                                <th scope="col" className="px-4 py-3">Genre</th>
                                <th scope="col" className="px-4 py-3">Release Date</th>
                                <th scope="col" className="px-4 py-3">Rating</th>
                                <th scope="col" className="px-4 py-3">Edit</th>
                                <th scope="col" className="px-4 py-3">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Sample rows, adjust based on your data */}
                            <tr>
                                <th scope="row" className="px-4 py-3">1</th>
                                <td className="px-4 py-3">Mark</td>
                                <td className="px-4 py-3">Otto</td>
                                <td className="px-4 py-3">@mdo</td>
                                <td className="px-4 py-3">@mdo</td>
                                <td className="px-4 py-3">@mdo</td>
                                <td className="px-4 py-3">@mdo</td>
                            </tr>
                        </tbody>
                    </table>
                )}

                {activeTab === 'shows' && (
                    <table className="table table-striped table-dark rounded-3">
                        <thead>
                            <tr>
                                <th scope="col" className="px-4 py-3">Poster</th>
                                <th scope="col" className="px-4 py-3">Title</th>
                                <th scope="col" className="px-4 py-3">Genre</th>
                                <th scope="col" className="px-4 py-3">Release Date</th>
                                <th scope="col" className="px-4 py-3">Rating</th>
                                <th scope="col" className="px-4 py-3">Edit</th>
                                <th scope="col" className="px-4 py-3">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Sample rows, adjust based on your data */}
                            <tr>
                                <th scope="row" className="px-4 py-3">1</th>
                                <td className="px-4 py-3">Mark</td>
                                <td className="px-4 py-3">Otto</td>
                                <td className="px-4 py-3">@mdo</td>
                                <td className="px-4 py-3">@mdo</td>
                                <td className="px-4 py-3">@mdo</td>
                                <td className="px-4 py-3">@mdo</td>
                            </tr>
                        </tbody>
                    </table>
                )}
            </div>

            <style jsx>{`
                .transparent-btn {
                    background: transparent;
                    border: none;
                    color: white;
                    font-weight: bold;
                    padding: 10px 15px;
                }

                .transparent-btn:hover {
                    cursor: pointer;
                }

                .transparent-btn:focus {
                    outline: none;
                }

                .border-warning {
                    border-bottom: 2px solid yellow;
                }
            `}</style>
        </div>
    );
}
