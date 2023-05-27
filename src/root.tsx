// @refresh reload
import { QueryProvider } from "@prpc/solid";
import { Suspense } from "solid-js";
import { Body, ErrorBoundary, FileRoutes, Head, Html, Meta, Routes, Scripts, Title } from "solid-start";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import "./root.css";
import "./styles/layout.css";

export default function Root() {
	return (
		<Html lang="en">
			<Head>
				<Title>Reddit - Dive into anything</Title>
				<Meta charset="utf-8" />
				<Meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Body class="h-screen overflow-y-scroll bg-slate-200 dark:bg-slate-800">
				<QueryProvider>
					<Suspense>
						<ErrorBoundary>
							<div class="font-sans">
								<Header />
								<div class="mt-12 flex flex-row">
									<SideMenu />
									<Routes>
										<FileRoutes />
									</Routes>
								</div>
							</div>
						</ErrorBoundary>
					</Suspense>
				</QueryProvider>
				<Scripts />
			</Body>
		</Html>
	);
}
