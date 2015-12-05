package quadTree;

public class DataPoint {

    private static final float EPSILON = 0.000001f;

    public final float x, y;

    public DataPoint(float _x, float _y) {
        this.x = _x;
        this.y = _y;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj instanceof DataPoint) {
            DataPoint that = (DataPoint) obj;

            return Math.abs(this.x - that.x) < EPSILON &&
                    Math.abs(this.y - that.y) < EPSILON;
        }

        return false;
    }
}
