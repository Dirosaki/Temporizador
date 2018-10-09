const AppStyle = {
    titulo: {
        color: 'black',
        fontSize: '4rem',
        fontFamily: 'Arial, sans serif'
    },
    divDeFora: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        flexDirection: 'column'
    },
    divTemp: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '4rem',
    },
    button: {
        width: '32%',
        height: '40px',
        borderRadius: 10,
        border: 'none',
        cursor: 'pointer',
        fontSize: '85%',
        textTransform: 'uppercase',
        fontWeight: '700',
        background: 'linear-gradient(to right, transparent, white, white, white, transparent)',
        boxShadow: '0 0 1px inset, 0 0 1px',
        outline: 'none'
    },

    buttonHover: {
        background: 'linear-gradient(to right, transparent, white, black, white, transparent)',
    },
    divButton: {
        width: '50%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    divButao: {
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '15%',
        marginBottom: '-70px',
        marginTop: '-30px'
    },
    butao1: {
        width: 50,
        height: 50,
        borderRadius: '50%',
        border: 'none',
        background: 'radial-gradient(lime, green)',
        fontSize: 30,
        cursor: 'pointer',
        boxShadow: '0 0 5px inset, 0 0 5px',
        outline: 'none'
    },
    butao2: {
        width: 50,
        height: 50,
        borderRadius: '50%',
        border: 'none',
        background: 'radial-gradient(lightsalmon, red)', 
        fontSize: 30,
        cursor: 'pointer',
        boxShadow: '0 0 5px inset, 0 0 5px',
        outline: 'none'
    }

}

export default AppStyle;