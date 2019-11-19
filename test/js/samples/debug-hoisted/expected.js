/* generated by Svelte vX.Y.Z */
import {
	SvelteComponentDev,
	dispatch_dev,
	init,
	noop,
	safe_not_equal
} from "svelte/internal";

const file = undefined;

function create_fragment(ctx) {
	const block = {
		c: function create() {
			{
				const obj = ctx[0];
				const kobzol = ctx[1];
				console.log({ obj, kobzol });
				debugger;
			}
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: noop,
		p: function update(ctx, changed) {
			if (changed & 3) {
				const obj = ctx[0];
				const kobzol = ctx[1];
				console.log({ obj, kobzol });
				debugger;
			}
		},
		i: noop,
		o: noop,
		d: noop
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self) {
	let obj = { x: 5 };
	let kobzol = 5;

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("obj" in $$props) $$invalidate(0, obj = $$props.obj);
		if ("kobzol" in $$props) $$invalidate(1, kobzol = $$props.kobzol);
	};

	return [obj, kobzol];
}

class Component extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Component",
			options,
			id: create_fragment.name
		});
	}
}

export default Component;