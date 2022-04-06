import GetSearch from "./Search/GetSearch"



const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<h2>SEARCH SMTHNG</h2>
			<GetSearch />
		</>
	)
}

export default Home
