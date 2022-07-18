function SortBy({ setSearchParams }) {
  return (
    <div>
      <select
        name="sort-by-values"
        id="sort-by-menu"
        onChange={(event) => {
          let value = event.target.value;
          if (value === "asc") {
            setSearchParams({ sort_by: "created_at", order: value });
          } else {
            setSearchParams({ sort_by: value });
          }
        }}
      >
        <option value="created_at">Newest</option>
        <option value="asc">Oldest</option>
        <option value="votes">Most Liked</option>
        <option value="comment_count">Most Comments</option>
      </select>
    </div>
  );
}

export default SortBy;
