package quadTree;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

import static java.lang.Float.valueOf;

public class DataSet {

    public static final List<DataPoint> readDataPoints(InputStream stream) throws DataException {
        List<DataPoint> result = new ArrayList<>();
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(stream))) {
            String currentLine;
            while ((currentLine = reader.readLine()) != null) {
                String[] currentLineSplitAroundComma = currentLine.split(",");
                result.add(new DataPoint(valueOf(currentLineSplitAroundComma[0]), valueOf(currentLineSplitAroundComma[1])));
            }
        } catch (IOException e) {
            throw new DataException("Couldn't Read Data Set", e);
        }
        return result;
    }

}
