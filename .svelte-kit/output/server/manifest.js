export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "Casino/_app",
	assets: new Set([".nojekyll"]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.c8dea2ce.js","app":"_app/immutable/entry/app.3e01622d.js","imports":["_app/immutable/entry/start.c8dea2ce.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.c64e318d.js","_app/immutable/chunks/index.35a173b3.js","_app/immutable/chunks/paths.4c066691.js","_app/immutable/entry/app.3e01622d.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.38896ce3.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
