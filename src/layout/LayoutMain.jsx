import "./LayoutMain.css"

export const LayoutMain = ( {children} ) => {
  return (
    <div className="container">
			<header className="header">
				<img src="/logoV2.svg" alt="Logo" className="logo" />
				<h1>Header</h1>
				<nav>
					<ul>
						<li><a href="#">Link 1</a></li>
						<li><a href="#">Link 2</a></li>
						<li><a href="#">Link 3</a></li>
					</ul>
				</nav>
			</header>
			{children}
		</div>
  )
}
