import SlideScroll from "./SlideScroll/index";

export default function Project({ data }) {
  return (
    <div className="container py-12">
      <div className="row">
        <div className="col-12">
          <SlideScroll data={data || []} />
        </div>
      </div>
    </div>
  );
}
