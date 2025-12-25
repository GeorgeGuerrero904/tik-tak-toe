function InitScreen() {
    const formAction = async (formData) => {

    };

    return (
        <form action={formAction} className="text-center">
            <div className="row">
                <div className="playerBox">
                    <label htmlFor="playerOne"> Player 1</label>
                    <input type="text" name="playerOne" id="playerOne"/>
                </div>
                <div className="playerBox">
                    <label htmlFor="playerTwo">Player 2</label>
                    <input type="text" name="playerTwo" id="playerTwo"/>
                </div>
            </div>
            <button>Asign Players</button>
        </form>
    );
}

export default InitScreen;