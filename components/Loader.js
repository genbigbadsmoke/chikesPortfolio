function Loader() {
    return (
        <>
        <div className="loaderIcon"></div>
        <style jsx>
            {`
            .loaderIcon {
                border: 10px solid #ffffff;
                border-radius: 50%;
                border-top: 10px solid #3498bd;
                width: 10px;
                height: 10px;
                animation: spin 5s linear infinite;
                margin-left: 50%;
              }

              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}
        </style>
        </>
    )
}

export default Loader;