import SlideScroll from "./SlideScroll/index";

export default function Experience({ data }) {
  // Merge tất cả projects từ company và personal vào một mảng
  const allProjects = [
    ...(data[0]?.company || []),
    ...(data[1]?.personal || []),
  ];

  return (
    <div className="container py-12">
      <div className="row">
        <div className="col-12">
          <SlideScroll data={allProjects} />
        </div>
      </div>
    </div>
  );
}
