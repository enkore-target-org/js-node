import {
	type RawType,
	type EnkoreTargetJSNode_V0_Rev0,
	createEntity
} from "@enkore/spec"

export function defineTargetConfig(
	config: Omit<RawType<EnkoreTargetJSNode_V0_Rev0>, "_targetIdentifier">
) {
	return createEntity("EnkoreTargetJSNode", 0, 0, {
		_targetIdentifier: "js-node",
		...config
	})
}
