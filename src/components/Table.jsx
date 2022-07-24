

function Table() {
    return (
        <div className="container py-5 w-100 mt-5 me-5  bg-light rounder shadow">
            <div className="row">
                <div className="col">
                    <div className="mb-3 ">
                        <div class="container">
                            <div class="row ">
                                <h1>FdezTable</h1>
                                <table class="table table-bordered border-primary">
                                    <thead>
                                        <tr>
                                            <th>
                                                ID
                                            </th>
                                            <th>
                                                Nombre
                                            </th>
                                            <th>
                                                Email
                                            </th>
                                            <th>
                                                Password
                                            </th>
                                        </tr>
                                    </thead>
                            

                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                1
                                            </th>
                                            <td>
                                                Mark
                                            </td>
                                            <td>
                                                Otto
                                            </td>
                                            <td>
                                                @mdo
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                2
                                            </th>
                                            <td>
                                                Jacob
                                            </td>
                                            <td>
                                                Thornton
                                            </td>
                                            <td>
                                                @fat
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                3
                                            </th>
                                            <td>
                                                Larry
                                            </td>
                                            <td>
                                                the Bird
                                            </td>
                                            <td>
                                                @twitter
                                            </td>
                                        </tr>
                                    </tbody>
                                    
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Table;