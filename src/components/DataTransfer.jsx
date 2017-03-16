import React from 'react';

const ItemsList = ({ items }) => (
	<div className="data-transfer-items">
		<strong>Items</strong>
		{ ' ' }
		({ items.length })
		<ol>
			{
				items.map((item, i) => (
					<li key={ i }>
						{ JSON.stringify(item) }
					</li>
				))
			}
		</ol>
	</div>
);

const TypesList = ({ types }) => (
	<div className="data-transfer-types">
		<strong>Types</strong>
		{ ' ' }
		({ types.length })
		<ol>
			{
				types.map((type, i) => (
					<li key={ i }>
						{ JSON.stringify(type) }
					</li>
				))
			}
		</ol>
	</div>
);

const FilesList = ({ files }) => (
	<div className="data-transfer-files">
		<strong>Files</strong>
		{ ' ' }
		({ files.length })
		<ol>
			{
				files.map((file, i) => (
					<li key={ i }>
						{ JSON.stringify(file) }
					</li>
				))
			}
		</ol>
	</div>
);

const DataTransfer = ({ data }) => (
	<div className="data-transfer">
		<ItemsList items={ data.items } />
		<TypesList types={ data.types } />
		<FilesList files={ data.files } />
	</div>
);

export default DataTransfer;
