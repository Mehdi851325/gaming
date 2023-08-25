import usePlatforms from "./usePlatform";

const usePlatformFind = (id?: number) => {
  const { data: platforms } = usePlatforms();
  return platforms?.results.find((p) => p.id === id);
};

export default usePlatformFind;
